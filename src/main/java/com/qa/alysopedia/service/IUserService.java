package com.qa.alysopedia.service;

import com.qa.alysopedia.dto.UserDTO;
import com.qa.alysopedia.exception.UserAlreadyExistsException;

public interface IUserService {
	UserDTO createUser(UserDTO userDto) throws UserAlreadyExistsException;

}
