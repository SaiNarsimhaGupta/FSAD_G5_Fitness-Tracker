package com.bits.fsad.ftapiservice.repository;

import com.bits.fsad.ftapiservice.entities.Nutrition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NutritionRepository extends JpaRepository<Nutrition, String> {
    List<Nutrition> findAllByUserid(String user);
}
