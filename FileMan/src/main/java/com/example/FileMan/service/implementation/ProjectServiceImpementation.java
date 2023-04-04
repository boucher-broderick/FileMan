package com.example.FileMan.service.implementation;

import com.example.FileMan.model.Project;
import com.example.FileMan.repo.ProjectRepo;
import com.example.FileMan.service.ProjectService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

import static java.lang.Boolean.TRUE;


@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class ProjectServiceImpementation implements ProjectService {
    private final ProjectRepo projectRepo;
    private EntityManager em;

    @Override
    public Project createProject(String name, String desc, String createdBy) {
        log.info("Saving new Project: {}", name);
        return projectRepo.createProject(name, desc, createdBy, "bob");
    }

    @Override
    public Collection<Project> getProjects() {
        log.info("Fetching all projects");
        return (Collection<Project>) projectRepo.getProjects();
    }
    //sdcsdapisdjcoasidjcaosdc

    @Override
    public Project get(Long id) {
        log.info("fethcing Project: {}", id);
        return projectRepo.findById(id).get();
    }

    @Override
    public Project update(Project project) {
        log.info("updating Project: {}", project.getName());
        return projectRepo.save(project);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("updating Project: {}", id);
        projectRepo.deleteById(id);
        return TRUE;
    }
}
