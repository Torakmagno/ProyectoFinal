package valentino.zampieri.entornosevidor.vapeoapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import valentino.zampieri.entornosevidor.vapeoapi.entity.Cliente;
import valentino.zampieri.entornosevidor.vapeoapi.service.IClienteService;


@RestController
@RequestMapping("/api")
public class ClienteController {
	
		
		@Autowired
		private IClienteService serviceCliente;
		
		
		@GetMapping("/clientes")
		public List<Cliente> buscarTodos(){
			return serviceCliente.buscarTodos();
		}
			
			
		@PostMapping("/clientes")
		public Cliente guardar(@RequestBody Cliente cliente) {
		return serviceCliente.guardar(cliente);
		}
		
		@PutMapping("/clientes")
		public Cliente modificar(@RequestBody Cliente cliente) {
			return serviceCliente.guardar(cliente);
		}
		
		@DeleteMapping("/clientes/{id}")
		public String eliminar(@PathVariable("id") int idCliente) {
			serviceCliente.eliminar(idCliente);
			return "Registro eliminado";
		}
		
		@GetMapping("/me")
		public User me(@AuthenticationPrincipal User customUser) {
			return customUser;
		}
		
	
		
	}


