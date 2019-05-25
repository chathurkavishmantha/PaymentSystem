package com.Assiment.paf.repositories;

import com.Assiment.paf.models.PaymentDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<PaymentDTO, Integer> {

}
