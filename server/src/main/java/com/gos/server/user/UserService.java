package com.gos.server.user;

import com.gos.server.exception.ResourceNotFoundException;
import com.gos.server.history.History;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public List<UserDTO> getUsers() {
        return userRepository.findAll().stream().map(UserMapper::mapToUserDTO).toList();
    }

    public UserDTO updateUser(Long id, UserDTO user) {
        User userToUpdate = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] found".formatted(id)));

        if(user.role() != null) {
            userToUpdate.setUserRole(user.role());
        }
        return UserMapper.mapToUserDTO(userRepository.save(userToUpdate));
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User with email [%s] found".formatted(email)));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public UserDTO createUser(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return UserMapper.mapToUserDTO(userRepository.save(user));
    }

    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserMapper::mapToUserDTO)
                .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] not found".formatted(id)));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User with email [%s] not found".formatted(email)));
    }

    public User appendHistory(String email, History history) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] not found".formatted(email)));
        user.getHistories().add(history);
        return userRepository.save(user);
    }

}
