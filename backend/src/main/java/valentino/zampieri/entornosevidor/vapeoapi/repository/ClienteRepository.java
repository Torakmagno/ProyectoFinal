package valentino.zampieri.entornosevidor.vapeoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
