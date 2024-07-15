package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userProfile;
import com.netflixClone.backend.repository.userProfileRepo;
import com.netflixClone.backend.service.userProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class userProfileServiceImpl implements userProfileService {

    @Autowired
    private userProfileRepo userProfileRepository;
    public userProfile addProfile(userProfile newProfile){
        return userProfileRepository.save(newProfile);
    }
    @Override
    public userProfile updateProfile(userProfile updateProfile,String email, String profileName) {
        Optional<userProfile> existingProfile=userProfileRepository.findByEmailAndProfileName(email,profileName);
        userProfile profile = existingProfile.get();
        profile.setProfileName(updateProfile.getProfileName());
        profile.setProfilePicture(updateProfile.getProfilePicture());
        profile.setLanguage(updateProfile.getLanguage());
        profile.setMaturity(updateProfile.getMaturity());
        profile.setGameHandle(updateProfile.getGameHandle());
        return userProfileRepository.save(profile);
    }
    @Override
    public void deleteProfile(String email,String profileName) {
        userProfileRepository.deleteByEmailAndProfileName(email, profileName);
    }
    @Override
    public boolean validateProfileName(String email, String profileName) {
        Optional<userProfile> existingProfile= userProfileRepository.findByEmailAndProfileName(email, profileName);
        return !existingProfile.isPresent();
    }
    @Override
    public boolean validateGameHandle(String gameHandle) {
        Optional<userProfile> existingProfile=userProfileRepository.findByGameHandle(gameHandle);
        return !existingProfile.isPresent();
    }

    @Override
    public List<userProfile> getAllProfiles(String email) {
        return userProfileRepository.findAllByEmail(email);
    }
}
