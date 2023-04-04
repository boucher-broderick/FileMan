package com.example.FileMan.service;

import com.example.FileMan.model.UniqueId;
import com.example.FileMan.repo.UniqueIdRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UtilityServices {
    @Autowired
    private UniqueIdRepo uniqueIdRepository;

    @Transactional
    public String getUniqueIdentifier() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        String uniqueId = String.format("%s-%s",
                "sadfuidhv9aosdf",
                UUID.randomUUID().toString().replace("-", "")
        );
        // you could left this check
        while (uniqueIdRepository.existsById(uniqueId)) {
            uniqueId = UUID.randomUUID().toString().replace("-", "");
        }
        uniqueIdRepository.save(new UniqueId(uniqueId));
        return uniqueId;
    }
}