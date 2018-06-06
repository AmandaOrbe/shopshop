module Spree::BaseHelper
     def logo(image_path = Spree::Config[:logo], img_options: {})
      link_to image_tag(image_path), spree.root_path
    end

    def nav_tree(root_taxon, current_taxon, max_level = 1)
      return '' if max_level < 1 || root_taxon.children.empty?
      content_tag :div, class: "#{root_taxon.name} navbar-item" do
        taxons = root_taxon.children.map do |taxon|
          css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon) && "navbar-item") ? 'active' : nil
          content_tag :h5, class:  css_class do
           link_to(taxon.name, seo_url(taxon)) +
             taxons_tree(taxon, current_taxon, max_level - 1)
          end
        end
        safe_join(taxons, "\n")
      end
    end
end
