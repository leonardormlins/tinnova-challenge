const uuidv4 = require('uuid/v4');

module.exports = app => {
    const veiculosDB = app.data.veiculos;
    const controller = {};

    const { veiculos: veiculosMock } = veiculosDB;
  
    controller.listarVeiculos = (req, res) => res.status(200).json(veiculosDB);

    controller.adicionarVeiculo = (req, res) => {
        veiculosMock.data.push({
            id: uuidv4(),
            veiculo: req.body.veiculo,
            marca: req.body.marca,
            ano: req.body.ano,
            descricao: req.body.descricao,
            vendido: req.body.vendido,
            created: new Date(),
            updated: new Date(),
        })
        return res.status(201).json(veiculosMock);
    }

    controller.getVeiculo = (req, res) => {
        const { idVeiculo } = req.params;

        function buscar(id) {
            const veiculoEncontrado = veiculosMock.data.find(veiculo => veiculo.id === idVeiculo);
            const veiculoIndice = veiculosMock.data.findIndex(veiculo => veiculo.id === idVeiculo);
            return { veiculoEncontrado, veiculoIndice }
        }

        const { veiculoEncontrado } = buscar(idVeiculo);

        res.status(200).json({veiculoEncontrado});
    }

    controller.removerVeiculo = (req, res) => {
        const { idVeiculo } = req.params;
        const buscar = controller.getVeiculo.buscar;

        const { veiculoIndice } = buscar(idVeiculo);

        //Caso não encontre
        if(veiculoIndice === -1) {
            res.status(404).json({ message: 'Veículo não encontrado!' })
        }
        //Caso encontre
        else {
            veiculosMock.data.splice(veiculoIndice, 1);
            res.status(200).json({ message: 'Veículo removido com sucesso!' })
        }
    }

    controller.atualizaVeiculo = (req, res) => {
        const { idVeiculo } = req.params;
        const buscar = controller.getVeiculo.buscar;

        const { veiculoEncontrado, veiculoIndice } = buscar(idVeiculo);

        //Caso não encontre
        if(!veiculoEncontrado) {
            res.status(404).json({ message: 'Veículo não encontrado!' })
        }
        //Caso encontre
        else {
            const veiculoAtualizado = {
                id: veiculoEncontrado.id,
                veiculo: req.body.veiculo,
                marca: req.body.marca,
                ano: req.body.ano,
                descricao: req.body.descricao,
                vendido: req.body.vendido,
                created: veiculoEncontrado.created,
                updated: new Date(),
            }

            veiculosMock.data.splice(veiculoIndice, 1, veiculoAtualizado);
            res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
        }
    }

    controller.buscarVeiculo = (req, res) => {
        const { veiculo, marca, ano,
                 descricao, vendido } = req.query;
    
        function buscar(elem) {
            if(elem.veiculo == veiculo) return elem;
            if(elem.marca == marca) return elem;
            if(elem.ano == ano) return elem;
            if(elem.descricao == descricao) return elem;
            if(elem.vendido === vendido) return elem;
            return false;
        }

        veiculosEncontrados = veiculosMock.data.filter( buscar )

        res.status(200).json({ encontrados: veiculosEncontrados });
    }

    controller.patchVeiculo = (req, res) => {
        const { idVeiculo } = req.params;
        const body = req.body;
        const buscar = controller.getVeiculo.buscar;

        const { veiculoEncontrado, veiculoIndice } = buscar(idVeiculo);

        if(!veiculoEncontrado) res.status(404).json({message: 'Veículo não encontrado!'})
        
        const veiculoAtualizado = {
            id: veiculoEncontrado.id,
            veiculo: body.veiculo || veiculoEncontrado.veiculo,
            marca: body.marca || veiculoEncontrado.marca,
            ano: body.ano || veiculoEncontrado.ano,
            descricao: body.descricao || veiculoEncontrado.descricao,
            vendido: body.vendido || veiculoEncontrado.vendido,
            created: veiculoEncontrado.created,
            updated: new Date(),
        }
        
        veiculosMock.data.splice(veiculoIndice, 1, veiculoAtualizado);
        res.status(200).json({veiculoAtualizado});

    }

    return controller;
}