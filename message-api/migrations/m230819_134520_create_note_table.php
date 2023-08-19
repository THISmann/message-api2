<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%note}}`.
 */
class m230819_134520_create_note_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%note}}', [
            'id' => $this->primaryKey(), 
            'note' => $this->integer()->notNull(),
            'id_cafe' => $this->integer()->notNull()
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%note}}');
    }
}
