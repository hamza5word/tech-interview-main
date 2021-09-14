package ae.solidbase.interview.faker;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.repository.UserRepository;
import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

import static ae.solidbase.interview.util.DateUtil.dateToLocalDate;

@Component
@Slf4j
@RequiredArgsConstructor
public class DbSeeder {

    private final UserRepository userRepository;
    private final Faker faker;

    @PostConstruct
    public void init() {
        int count = 500;
        log.info("Seeding {} users", count);
        for (int i = 0; i <= count; i++) {
            userRepository.save(getFakeUser());
        }
    }

    private User getFakeUser() {
        return User.builder()
                .name(faker.name().firstName())
                .surname(faker.name().lastName())
                .birthDate(dateToLocalDate(faker.date().birthday()))
                .email(faker.funnyName().name().concat("@mail.ae"))
                .password(faker.funnyName().name())
                .phone(faker.phoneNumber().cellPhone())
                .identity(faker.idNumber().ssnValid())
                .passportNumber(faker.idNumber().validSvSeSsn())
                .build();
    }
}
