package com.qa.alysopedia.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.alysopedia.domain.Wiki;
import com.qa.alysopedia.dto.WikiDTO;
import com.qa.alysopedia.exception.WikiNotFoundException;
import com.qa.alysopedia.repository.WikiRepository;

@Service
public class WikiService {

	private final WikiRepository wikiRepository;
	
	private final ModelMapper mapper;
	
	@Autowired
	public WikiService(WikiRepository wikiRepository, ModelMapper mapper) {
		this.wikiRepository = wikiRepository;
		this.mapper = mapper;
	}
	
	private WikiDTO mapToDTO(Wiki wiki) {
		return this.mapper.map(wiki, WikiDTO.class);
	}
	
	public WikiDTO createWiki(Wiki wiki) {
		return this.mapToDTO(this.wikiRepository.save(wiki));
	}
	
	public List<WikiDTO> readWiki() {
		return this.wikiRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
	}
	
	public WikiDTO findWikiById(Long id) {
		return this.mapToDTO(this.wikiRepository.findById(id).orElseThrow(WikiNotFoundException::new));
	}
	
    public List<WikiDTO> findWikiByTitle(String title) {
        return this.wikiRepository.findWikiByTitle(title).stream().map(this::mapToDTO).collect(Collectors.toList());
    }
    
    public List<WikiDTO> findWikiByCategory(String category) {
        return this.wikiRepository.findWikiByCategory(category).stream().map(this::mapToDTO).collect(Collectors.toList());
    }
	
	public WikiDTO updateWiki(Long id, Wiki wiki) {
		Wiki update = this.wikiRepository.findById(id).orElseThrow(WikiNotFoundException::new);
		update.setTitle(wiki.getTitle());
		update.setCategory(wiki.getCategory());
		Wiki tempWiki = this.wikiRepository.save(update);
		return this.mapToDTO(tempWiki);
	}
	
	public boolean deleteWiki(Long id) {
		if(!this.wikiRepository.existsById(id)) {
			throw new WikiNotFoundException();
		}
		this.wikiRepository.deleteById(id);
		return this.wikiRepository.existsById(id);
	}
}
