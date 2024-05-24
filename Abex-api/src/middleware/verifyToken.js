import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuarios';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization || null;
    if (!token || token == 'Bearer') {
      return res.status(401).send({
        message: 'Não Autorizado',
      });
    }
    const [_, tokenLimpo] = token.split(' ');

    const decodedToken = jwt.verify(tokenLimpo, process.env.PRIVATE_KEY);

    if (!decodedToken) {
      return res.status(401).send({
        message: 'Não Autorizado',
      });
    }
    if (decodedToken.exp < (Date.now() / 1000)) {
      return res.status(401).send({
        message: 'Token expirado, faça login!',
      });
    }

    const usuario = await Usuario.findOne({
      where: {
        id: decodedToken.userId,
      },
    });
    if (!usuario) {
      return res.status(401).send({
        message: 'Conta incorreta!',
      });
    }
    next();
  } catch (error) {
    return res.status(401).send({
      message: 'Ops! erro de verificação',
    });
  }
};
