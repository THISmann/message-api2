<?php foreach ($messages as $message): ?>
    <div>
        <h2><?= $message->subject ?></h2>
        <p><?= $message->content ?></p>
    </div>
<?php endforeach; ?>
