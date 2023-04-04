package com.example.FileMan.service;

import com.example.FileMan.model.Project;

import java.util.Collection;

public interface ProjectService {
    Project createProject(String name, String desc, String createdBy);
    Collection<Project> getProjects();
    Project get(Long id);
    Project update(Project project);
    Boolean delete(Long id);
}
