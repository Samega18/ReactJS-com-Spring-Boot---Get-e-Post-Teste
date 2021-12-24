package net.javaguides.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;

@SpringBootApplication
public class SpringBootBackEndBasicApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBackEndBasicApplication.class, args);
	}
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("Samuel", "Marques", "email@gmail.com"));
		this.userRepository.save(new User("Tony", "Stark", "email2@gmail.com"));
		this.userRepository.save(new User("Tony2", "Stark2", "email3@gmail.com"));
	}
	
	public void newUser(String firstName, String lastName, String email) {
		this.userRepository.save(new User(firstName, lastName, email));
	}

}
