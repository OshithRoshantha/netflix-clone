package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userVideoList;
import com.netflixClone.backend.repository.preferencesRepo;
import com.netflixClone.backend.service.preferencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class preferencesServiceImpl implements preferencesService {
    @Autowired
    private preferencesRepo preferencesRepository;
    public userVideoList addToList(userVideoList addVideo){
        return preferencesRepository.save(addVideo);
    }
    public List<userVideoList> getAllInList(String email, String profileName) {
        return preferencesRepository.findAllByEmailAndProfileName(email, profileName);
    }
    public void removeFromList(String email, String profileName, String videoTitle) {
        preferencesRepository.deleteByEmailAndProfileNameAndVideoTitle(email,profileName,videoTitle);
    }
}
