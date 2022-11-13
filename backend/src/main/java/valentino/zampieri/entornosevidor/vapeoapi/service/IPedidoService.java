package valentino.zampieri.entornosevidor.vapeoapi.service;

import java.util.List;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Pedido;

public interface IPedidoService {

	
	
	List<Pedido> buscarTodos();

	Pedido guardar(Pedido pedido);
	void eliminar(int idPedido);

	Pedido buscarPorId(int id);
	
}
