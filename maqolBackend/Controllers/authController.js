import pool from '../config/connection.js'



export const register = (req,res)=>{
    try{

    const { username, email, password, birth_date, role, favorite_word, favorite_writer} = req.body;

    const passwordh = bcrypt.hash(password,10);
    const sign =  pool.query(`
        insert into users(username, email, password, birth_date, role, favorite_word, favorite_writer)
        values($1,$2,$3)
        returning *
        `,
        [username, email, passwordh, birth_date, role, favorite_word, favorite_writer]
    )

    res.status(201).json({message: "muvaffariyatli royhatdan otildi", sign: sign.rows[0]});
    }catch(error){
    res.status(500).json({message: error});
        
    }
}

export const login = (req,res)=>{
    try{
    const { username,password} = req.body;

    const passwordh=  bcrypt.compare(password,10);
    const sign =  pool.query(`
        insert into users(username,password)
        values($1,$2)
        returning *
        `,
        [username,passwordh]
    )
    res.status(201).json({message: "Kirish success", sign: sign.rows});
    }catch(error){
    res.status(500).json({message: error});
        
    }

}


