package com.gos.server.customUserDetails;

import com.gos.server.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final CustomUserDetailsRepository userRepository;

    public CustomUserDetails createUser(CustomUserDetails user) {
        return userRepository.save(user);
    }

    public CustomUserDetails getUser(Long id) {
        return userRepository.findById(id).orElseThrow();
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username).orElseThrow(()-> new ResourceNotFoundException("User with username: [%s] not found.".formatted(username)));
    }

    public CustomUserDetails loadUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException("User with email: [%s] not found".formatted(email)));
    }
}
