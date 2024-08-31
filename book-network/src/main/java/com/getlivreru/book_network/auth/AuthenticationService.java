package com.getlivreru.book_network.auth;

import com.getlivreru.book_network.role.RoleRepository;
import com.getlivreru.book_network.security.JwtService;
import com.getlivreru.book_network.user.TokenRepository;
import com.getlivreru.book_network.user.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final EmailService emailService;
    private final TokenRepository tokenRepository;

}
