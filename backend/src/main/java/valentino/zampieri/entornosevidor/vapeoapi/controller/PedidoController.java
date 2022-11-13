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
import org.springframework.web.bind.annotation.RestController;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Cliente;
import valentino.zampieri.entornosevidor.vapeoapi.entity.Pedido;
import valentino.zampieri.entornosevidor.vapeoapi.service.IClienteService;
import valentino.zampieri.entornosevidor.vapeoapi.service.IPedidoService;

@RestController
@RequestMapping("/api")
public class PedidoController {
	
		
		@Autowired
		private IPedidoService servicePedido;
		
		
		@GetMapping("/pedidos")
		public List<Pedido> buscarTodos(){
			return servicePedido.buscarTodos();
		}
		
		
		@GetMapping("/pedidos/{id}")
		public Pedido buscarPorId(@PathVariable("id") int id){
			return servicePedido.buscarPorId(id);
		}
			
			
		@PostMapping("/pedidos")
		public Pedido guardar(@RequestBody Pedido pedido) {
		return servicePedido.guardar(pedido);
		}
		
		@PutMapping("/pedidos")
		public Pedido modificar(@RequestBody Pedido pedido) {
			return servicePedido.guardar(pedido);
		}
		
		@DeleteMapping("/pedidos/{id}")
		public String eliminar(@PathVariable("id") int idPedido) {
			servicePedido.eliminar(idPedido);
			return "Registro eliminado";
		}
		
		
	
		
	}


