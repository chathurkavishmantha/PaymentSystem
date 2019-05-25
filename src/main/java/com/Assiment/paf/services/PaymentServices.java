package com.Assiment.paf.services;

import com.Assiment.paf.models.PaymentDTO;

import java.util.List;
import java.util.Optional;

public interface PaymentServices { // we need to service because we need to comiunicate with database
                                    // we need to a payment implementation class  , to defind paymentServices class

    List<PaymentDTO> findAllPayment();  // we careate insert update delete... method for interfaces.but in here we cant impiment the method

    String savePayment(PaymentDTO paymentData);

    String updatePayment(PaymentDTO newPaymentData);

    Optional<PaymentDTO> findUByid(Integer id);

    String deletePayment(Integer id);
}
