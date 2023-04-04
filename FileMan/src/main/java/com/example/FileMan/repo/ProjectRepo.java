package com.example.FileMan.repo;

import com.example.FileMan.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;


public interface ProjectRepo extends JpaRepository <Project, Long> {

    Project findByName(String name);
    @Procedure(procedureName = "getProjects")
    List<Project> getProjects();

    @Procedure(procedureName = "createProject")
    Project createProject(String name, String description, String createdBy, String accessKey);




}
