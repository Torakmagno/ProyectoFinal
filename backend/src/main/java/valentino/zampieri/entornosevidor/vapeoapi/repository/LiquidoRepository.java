package valentino.zampieri.entornosevidor.vapeoapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Liquido;

public interface LiquidoRepository extends JpaRepository<Liquido, Integer> {
	// https://www.baeldung.com/spring-jpa-like-queries#1-named-parameters
	// SELECT * FROM `liquidos` WHERE nombre Like "%fresa%" OR descripcion LIKE "%fresa%"; 
	
	@Query("SELECT l FROM Liquido l WHERE l.nombre LIKE %:busqueda% OR l.descripcion LIKE %:busqueda%")
	public List<Liquido> findByWord(@Param("busqueda") String busqueda);
	
	@Query("SELECT l FROM Liquido l WHERE l.categoria LIKE %:elegir%")
	public List<Liquido> findByType(@Param("elegir") String elegir);
}
