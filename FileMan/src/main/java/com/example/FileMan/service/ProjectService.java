package com.example.FileMan.service;

import com.example.FileMan.model.Project;

import java.util.Collection;

public interface ProjectService {
    Project create(Project project);
    Collection<Project> list();
    Project get(Long id);
    Project update(Project project);
    Boolean delete(Long id);
}
