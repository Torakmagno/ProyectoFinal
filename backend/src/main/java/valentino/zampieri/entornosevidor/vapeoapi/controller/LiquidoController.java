package valentino.zampieri.entornosevidor.vapeoapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Liquido;
import valentino.zampieri.entornosevidor.vapeoapi.service.ILiquidoService;

@RestController
@RequestMapping("/api")
public class LiquidoController {

	@Autowired
	private ILiquidoService serviceLiquidos;
	
	
	
	@GetMapping("/liquidos")
	public List<Liquido> buscarTodos(){
		return serviceLiquidos.buscarTodos();
	}
	
	@GetMapping("/liquido/{id}")
	public Liquido buscarPorId(@PathVariable("id") int id){
		return this.serviceLiquidos.buscarPorId(id);
	}
		
		
	@PostMapping("/liquidos")
	public Liquido guardar(@RequestBody Liquido liquido) {
	return serviceLiquidos.guardar(liquido);
	}
	
	@PutMapping("/liquidos")
	public Liquido modificar(@RequestBody Liquido liquido) {
		return serviceLiquidos.guardar(liquido);
	}
	
	@DeleteMapping("/liquidos/{id}")
	public String eliminar(@PathVariable("id") int idLiquidos) {
		serviceLiquidos.eliminar(idLiquidos);
		return "Registro eliminado";
	}
	
	@GetMapping("/liquido")
	public List<Liquido> buscarPorId(@RequestParam(name = "query", required = true) String query){
		return this.serviceLiquidos.findByWord(query);
	}
	
}
	


