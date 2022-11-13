package valentino.zampieri.entornosevidor.vapeoapi.service.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Liquido;
import valentino.zampieri.entornosevidor.vapeoapi.repository.LiquidoRepository;
import valentino.zampieri.entornosevidor.vapeoapi.service.ILiquidoService;

@Service
public class LiquidoService implements ILiquidoService {

	@Autowired
	private LiquidoRepository repoLiquido;
	
	@Override
	public List<Liquido> buscarTodos(){
		return repoLiquido.findAll();
		
	}

	@Override
	public Liquido guardar(Liquido liquido) {
		
		return repoLiquido.save(liquido);
	}

	@Override
	public void eliminar(int idLiquido) {
		repoLiquido.deleteById(idLiquido);
		
	}

	@Override
	public Liquido buscarPorId(int id) {
		return this.repoLiquido.findById(id).get();
	}

	@Override
	public List<Liquido> findByWord(String busqueda) {
		return this.repoLiquido.findByWord(busqueda);
	}
	@Override
	public List<Liquido> findByType(String elegir) {
		return this.repoLiquido.findByType(elegir);
	}

}
