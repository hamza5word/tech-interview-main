package ae.solidbase.interview;

import ae.solidbase.interview.user.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class RepositoryTest {

    @Autowired
    private UserRepository repository;

    @Test
    public void testGetUsers() {
        Assertions.assertNotNull(repository.findAll());
    }

    @Test
    public void testGetUser() {
        Long id = 2L;
        Assertions.assertNotNull(repository.findById(id).orElse(null));
    }

}
