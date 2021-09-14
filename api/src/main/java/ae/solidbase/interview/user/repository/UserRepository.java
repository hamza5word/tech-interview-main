package ae.solidbase.interview.user.repository;

import ae.solidbase.interview.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
