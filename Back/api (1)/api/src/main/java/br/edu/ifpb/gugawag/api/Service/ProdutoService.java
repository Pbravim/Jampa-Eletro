package br.edu.ifpb.gugawag.api.Service;

import br.edu.ifpb.gugawag.api.Modelo.Produto;
import br.edu.ifpb.gugawag.api.Repository.ProdutoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService implements IProdutoService {

    public List<Produto> getProduto;
    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public List<Produto> getProduto(){
        return produtoRepository.findAll();
    }

    @Override
    public Produto addProdutos(Produto produto){
        return produtoRepository.save(produto);
    }
    

    @Override
    public Produto getProduto(Long id) {
        return produtoRepository.findById(id).orElse(new Produto());
    }

    @Override
    public Boolean removerProduto(Long id){
        Produto produto = this.getProduto(id);
        try{
            produtoRepository.delete(produto);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Transactional
    @Override
    public Produto atualizarProduto(Produto produto){
        Produto produtoInserido = this.produtoRepository.save(produto);
        System.out.println(produtoInserido.getId()+ " " + produto.getId());
        if(produto.getPreco()<0){
            throw new RuntimeException("Menor que 0 não é permitido");
        }
        return produtoInserido;
    }






}
