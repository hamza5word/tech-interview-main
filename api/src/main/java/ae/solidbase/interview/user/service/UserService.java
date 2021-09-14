package ae.solidbase.interview.user.service;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    // TODO: Business logic goes here
    @Autowired
    private UserRepository repository;

    public List<User> getUsers() {
        return repository.findAll();
    }

    public User getUserById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Long saveUser(User user) {
        return repository.save(user).getId();
    }

    public Long deleteUser(User user) {
        repository.delete(user);
        return user.getId();
    }
}
