package com.example.FileMan.repo;

import com.example.FileMan.model.UniqueId;
import org.springframework.data.repository.CrudRepository;

public interface UniqueIdRepo extends CrudRepository<UniqueId, String> {

}