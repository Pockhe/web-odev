package com.phoneservice.controller;

import com.phoneservice.model.ServiceRequest;
import com.phoneservice.repository.ServiceRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/service")
public class ServiceRequestController {

    @Autowired
    private ServiceRequestRepository serviceRequestRepository;

    @GetMapping("/track")
    public String showTrackingForm() {
        return "service/track";
    }

    @PostMapping("/track")
    public String trackService(@RequestParam String phoneNumber, Model model) {
        ServiceRequest serviceRequest = serviceRequestRepository.findByPhoneNumber(phoneNumber);
        if (serviceRequest != null) {
            model.addAttribute("serviceRequest", serviceRequest);
            return "service/status";
        }
        model.addAttribute("error", "Bu telefon numarası ile kayıtlı servis talebi bulunamadı.");
        return "service/track";
    }

    @GetMapping("/new")
    public String showNewServiceForm(Model model) {
        model.addAttribute("serviceRequest", new ServiceRequest());
        return "service/new";
    }

    @PostMapping("/new")
    public String createServiceRequest(@ModelAttribute ServiceRequest serviceRequest) {
        serviceRequestRepository.save(serviceRequest);
        return "redirect:/service/track";
    }
} 