package com.phoneservice.model;

public enum ServiceStatus {
    RECEIVED("Alındı"),
    IN_DIAGNOSIS("Teşhis Aşamasında"),
    WAITING_PARTS("Parça Bekleniyor"),
    IN_REPAIR("Tamir Ediliyor"),
    TESTING("Test Ediliyor"),
    READY("Teslime Hazır"),
    DELIVERED("Teslim Edildi");

    private final String displayName;

    ServiceStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
} 