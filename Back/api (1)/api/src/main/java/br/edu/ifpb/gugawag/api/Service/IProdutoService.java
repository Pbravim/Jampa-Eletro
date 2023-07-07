package br.edu.ifpb.gugawag.api.Service;

import br.edu.ifpb.gugawag.api.Modelo.Produto;
import jakarta.transaction.Transactional;

import java.util.List;

public interface IProdutoService {
    List<Produto> getProduto();

    Produto addProdutos(Produto produto);

    Produto getProduto(Long id);

    Boolean removerProduto(Long id);

    @Transactional
    Produto atualizarProduto(Produto produto);
}
