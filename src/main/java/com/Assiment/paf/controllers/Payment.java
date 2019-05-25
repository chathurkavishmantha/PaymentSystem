package com.Assiment.paf.controllers;

import com.Assiment.paf.models.PaymentDTO;
import com.Assiment.paf.services.PaymentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class Payment {

    @Autowired
    private PaymentServices paymentServices;

    @GetMapping("/all")
    public List<PaymentDTO> allPayment() {
        return paymentServices.findAllPayment();
    }

    @PostMapping("/add")
    public String addPayment(@RequestBody PaymentDTO PamyentData) {
        return paymentServices.savePayment(PamyentData);
    }

    @PutMapping("/update")
    public String updatePayment(@RequestBody PaymentDTO newPamentData) {
        return paymentServices.updatePayment(newPamentData);
    }

    @GetMapping("/find/{id}")
    public Optional<PaymentDTO> getPaymentById(@PathVariable Integer id) {
        return paymentServices.findUByid(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deletePayment(@PathVariable Integer id){
        return paymentServices.deletePayment(id);
    }
}
