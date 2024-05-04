package com.bits.fsad.ftapiservice.repository;

import com.bits.fsad.ftapiservice.entities.Nutrition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NutritionRepository extends JpaRepository<Nutrition, String> {
}
