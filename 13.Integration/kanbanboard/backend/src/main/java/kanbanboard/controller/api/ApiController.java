package kanbanboard.controller.api;

import io.swagger.v3.core.util.Json;
import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> read() {
		List<Card> cards = cardRepository.findAll();

		log.info("Request[GET /card] [{}]", cards);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cards));
	}

	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> read(@RequestParam Long cardNo) {
		List<Task> tasks = taskRepository.findAllByCardNo(cardNo);

		log.info("Request[GET /task] [{}]", tasks);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(tasks));
	}

	@PostMapping("/task")
	public Task create(@RequestBody Task task) {
		log.info("Request[POST /task] [{}]", task);
		taskRepository.insert(task);

		return task;
	}

	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Map<String, Object>>> update(@PathVariable Long no, @RequestParam String done){
		log.info("Request[PUT /task/{}] [{}]", no, done);

		taskRepository.updateDone(no, done);

		Map<String, Object> task = new HashMap<>();
		task.put("no", no);
		task.put("done", done);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(task));
	}

	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long no) {
		log.info("Request[DELETE /task/{}]", no);

		taskRepository.delete(no);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
