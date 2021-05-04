import { 
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { 
    v4 as uuid
} from "uuid";
import { User } from "./User";

@Entity("Connections")

class Connection {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    user_id: string;


    @Column()
    socket_id: string;


    @JoinColumn({ name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date 

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export  { Connection }