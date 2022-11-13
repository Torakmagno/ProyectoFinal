package valentino.zampieri.entornosevidor.vapeoapi.service.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Pedido;
import valentino.zampieri.entornosevidor.vapeoapi.repository.PedidoRepository;
import valentino.zampieri.entornosevidor.vapeoapi.service.IPedidoService;

@Service
public class PedidoService implements IPedidoService {

	@Autowired
	private PedidoRepository repoPedido;
	
	@Override
	public List<Pedido> buscarTodos(){
		return repoPedido.findAll();
		
	}

	@Override
	public Pedido guardar(Pedido pedido) {
		
		return repoPedido.save(pedido);
	}

	@Override
	public void eliminar(int idPedido) {
		repoPedido.deleteById(idPedido);
		
	}

	@Override
	public Pedido buscarPorId(int id) {
		return this.repoPedido.findById(id).get();
	}
	

}
