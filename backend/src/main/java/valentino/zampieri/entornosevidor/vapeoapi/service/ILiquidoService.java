package valentino.zampieri.entornosevidor.vapeoapi.service;

import java.util.List;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Liquido;

public interface ILiquidoService {

	
	
	List<Liquido> buscarTodos();

	Liquido guardar(Liquido liquido);
	void eliminar(int idLiquido);
	
	Liquido buscarPorId(int id);
	List<Liquido> findByWord(String busqueda);

	List<Liquido> findByType(String elegir);

}
	
	
	
