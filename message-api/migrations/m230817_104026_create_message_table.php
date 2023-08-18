<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%message}}`.
 */
class m230817_104026_create_message_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%message}}', [
            'id' => $this->primaryKey(),
            'text' => $this->string()->notNull(),
            'id_cafe' => $this->integer()->notNull()
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%message}}');
    }
}
