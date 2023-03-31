package com.example.FileMan.repo;

import com.example.FileMan.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepo extends JpaRepository <Project, Long> {
    Project findByName(String name);
}
