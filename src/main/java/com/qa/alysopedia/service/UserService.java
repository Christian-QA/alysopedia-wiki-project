package com.qa.alysopedia.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.qa.alysopedia.domain.User;
import com.qa.alysopedia.dto.UserDTO;
import com.qa.alysopedia.exception.UserAlreadyExistsException;
import com.qa.alysopedia.repository.UserRepository;

@Service
public class UserService implements IUserService, UserDetailsService {
	
	@Autowired
	private UserRepository repository;

	private final ModelMapper mapper;

	@Autowired
	public UserService(UserRepository repository, ModelMapper mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}

	private UserDTO mapToDTO(User user) {
		return this.mapper.map(user, UserDTO.class);
	}

	public List<UserDTO> readUser() {
		return this.repository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		return null;
	}

	@Transactional
	@Override
	public UserDTO createUser(UserDTO userDTO) throws UserAlreadyExistsException {
		User user = new User();
		user.setUsername(userDTO.getUsername());
		user.setPassword(userDTO.getPassword());
		user.setActive(userDTO.isEnabled());
		user.setRoles("ROLE_USER");
		return this.mapToDTO(this.repository.save(user));
	}

}
