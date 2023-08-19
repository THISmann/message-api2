<?php

namespace app\controllers;
use app\models\Note;

class NoteController extends \yii\rest\ActiveController
{
    public $modelClass = 'app\models\Note';

    
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionFindNoteByCafe($id_cafe)
    {
        $notes = Note::find()
            ->where(['id_cafe' => $id_cafe])
            ->all();
        return  $notes;
    }
}
