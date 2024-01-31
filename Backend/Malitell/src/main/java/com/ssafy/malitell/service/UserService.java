package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.dto.request.JoinDto;
import com.ssafy.malitell.dto.request.user.ClientRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorRequestDto;
import com.ssafy.malitell.dto.response.user.ClientResponseDto;
import com.ssafy.malitell.dto.response.user.CounselorResponseDto;
import com.ssafy.malitell.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void join(JoinDto joinDTO) {
        String userId = joinDTO.getUserId();
        String name = joinDTO.getName();
        String nickname = joinDTO.getNickname();
        String password = joinDTO.getPassword();
        String email = joinDTO.getEmail();
        String phone = joinDTO.getPhone();
        String birth = joinDTO.getBirth();
        String gender = joinDTO.getGender();
        String role = joinDTO.getRole();

        Boolean isExist = userRepository.existsByUserId(userId);

        if(isExist) {
            return;
        }

        User user = new User();

        user.setUserId(userId);
        user.setName(name);
        user.setNickname(nickname);
        // 회원가입 시 반드시 패스워드 암호화 처리할 것!
        // 스프링 시큐리티에서 로그인 검증 시 입력된 패스워드를 해시화를 통해 암호화한 후 비교하기 때문!!
        user.setPassword(bCryptPasswordEncoder.encode(password));
        user.setEmail(email);
        user.setPhone(phone);
        user.setBirth(birth);
        user.setGender(gender);
        user.setRole(role);
        user.setGender(gender);

        userRepository.save(user);
    }

    public ClientResponseDto findClientInfo(Principal principal) {
        return userRepository.findClientByUserId(principal.getName());
    }

    public CounselorResponseDto findCounselorInfo(Principal principal) {
        return userRepository.findCounselorByUserId(principal.getName());
    }

    public User findUser(String userId) {
        return userRepository.findByUserId(userId);
    }

    @Transactional
    public int updateClientInfo(String userId, ClientRequestDto clientRequestDto) {
        User user = userRepository.findByUserId(userId);
        user.updateClient(clientRequestDto);
        return user.getUserSeq();
    }

    @Transactional
    public int updateCounselorInfo(String userId, CounselorRequestDto counselorRequestDto) {
        User user = userRepository.findByUserId(userId);
        user.updateCounselor(counselorRequestDto);
        return user.getUserSeq();
    }

    @Transactional
    public void deleteUser(String userId) {
        User user = userRepository.findByUserId(userId);
        int userSeq = user.getUserSeq();
        userRepository.deleteById(userSeq);
    }
}
