package ae.solidbase.interview.user.controller;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"${webapp.url}", "${webapp2.url}"}, allowedHeaders = "*")
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/requestAllUsers")
    @ApiOperation(value = "Finds All Users", response = User.class, responseContainer = "List")
    public ResponseEntity<List<User>> requestAllUsers() {
        return ResponseEntity.ok(service.getUsers());
    }

    @GetMapping("/requestUserById")
    @ApiOperation(value = "Finds Specific User By Id", response = User.class)
    public ResponseEntity<User> requestUserById(@RequestParam Long id) {
        return ResponseEntity.ok(service.getUserById(id));
    }

    @PostMapping("/requestUserSave")
    @ApiOperation(value = "Saves User to DB", response = Long.class)
    public ResponseEntity<Long> requestUserSave(@RequestBody User user) {
        return ResponseEntity.ok(service.saveUser(user));
    }

    @DeleteMapping("/requestUserDelete")
    @ApiOperation(value = "Deletes User from DB", response = Long.class)
    public ResponseEntity<Long> requestUserDelete(@RequestParam Long id) {
        return ResponseEntity.ok(service.deleteUser(service.getUserById(id)));
    }

}
