package com.example.FileMan.resource;

import com.example.FileMan.service.UtilityServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class UtilityController {

    @Autowired
    UtilityServices utilityServices;

    @GetMapping("/uniqueIdentifier")
    @ResponseBody
    public String uniqueIdentifier() {
        return utilityServices.getUniqueIdentifier();
    }

}