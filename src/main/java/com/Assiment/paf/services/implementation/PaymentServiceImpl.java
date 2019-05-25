package com.Assiment.paf.services.implementation;

import com.Assiment.paf.models.PaymentDTO;
import com.Assiment.paf.repositories.PaymentRepository;
import com.Assiment.paf.services.PaymentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentServiceImpl implements PaymentServices {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public List<PaymentDTO> findAllPayment() {
        List<PaymentDTO> allPayment = paymentRepository.findAll();
        return allPayment;
    }

    @Override
    public String savePayment(PaymentDTO paymentData) {
        paymentRepository.save(paymentData);
        return "data save";
    }

    @Override
    public String updatePayment(PaymentDTO newPaymentData) {

        String msg = null;

        if(newPaymentData.getP_id() != null){
            paymentRepository.save(newPaymentData);
            msg = "Data updated";
        }
        else{
            msg = "Data not updated";
        }
        return msg;

    }

    @Override
    public Optional<PaymentDTO> findUByid(Integer id) {

        return paymentRepository.findById(id);

    }

    @Override
    public String deletePayment(Integer id) {
        paymentRepository.deleteById(id);
        return "Payment Deleted";
    }
}
