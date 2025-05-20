package com.phoneservice.repository;

import com.phoneservice.model.ServiceRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long> {
    ServiceRequest findByPhoneNumber(String phoneNumber);
} 