import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('sales_inbox_messages')
  @Unique('unique_message_handler', ['message_id', 'handler_name'])
  export class SalesInboxMessage {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ type: 'uuid' })
    message_id: string;
  
    @Column({ type: 'varchar' })
    handler_name: string;
  
    @CreateDateColumn({ type: 'timestamp', name: 'handled_at' })
    handled_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }
  