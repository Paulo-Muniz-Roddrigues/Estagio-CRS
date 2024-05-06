import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuarios';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Usuario.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response,
      });
    }

    const response = await Usuario.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id}`,
        data: [],
      });
    }

    return res.status(200).send({
      type: 'success',
      message: 'Registro carregado com sucesso',
      data: response,
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      login, passwordHash, nomeCliente, telefone,
    } = req.body;

    const response = await Usuario.create({
      login,
      passwordHash,
      nomeCliente,
      telefone,
    });

    return res.status(200).send({
      type: 'success',
      message: 'Cadastro realizado com sucesso',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops! não foi possivel criar',
      response: error.message,
    });
  }
};

const update = async (id, dados, res) => {
  const response = await Usuario.findOne({ where: { id } });

  if (!response) {
    return res.status(200).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [],
    });
  }

  Object.keys(dados).forEach((field) => { response[field] = dados[field]; });

  await response.save();
  return res.status(200).send({
    type: 'success',
    field: '',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response,
  });
};

const persist = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return await create(req.body, res);
    }

    return await update(id, req.body, res);
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: 'Informe um id para deletar o registro',
        data: [],
      });
    }
    const response = await Usuario.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [],
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: 'success',
      message: `Registro id ${id} deletado com sucesso`,
      data: [],
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      username, password, telefone, nomeCliente,
    } = req.body;
    const response = await Usuario.findOne({
      where: {
        login: username,
      },
    });
    if (response) {
      throw new Error('Username já foi utilizado!');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    Usuario.create({
      login: username,
      passwordHash,
      telefone,
      nomeCliente,
    });
    return res.status(200).send({
      message: 'Dado enviados',
      data: [],
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Usuario.findOne({
      where: {
        login: username,
      },
    });
    if (!user) {
      throw new Error('Usuario ou senha invalidos');
    }

    const { passwordHash } = user;
    const resposta = await bcrypt.compare(password, passwordHash);

    if (resposta) {
      const token = jwt.sign({ userId: user.id, userName: user.name }, process.env.PRIVATE_KEY, { expiresIn: '1h' });
      return res.status(400).send({
        token,
      });
    }
    return res.status(400).send({
      message: 'Usuario ou senha invalidos',
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

export default {
  get,
  persist,
  create,
  update,
  destroy,
  register,
  login,
};
